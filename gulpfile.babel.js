import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import {execSync} from 'child_process'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import {registerComponent} from 'mjml-core'


const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? walkSync(path.join(dir, file), filelist)
            : filelist.concat(path.join(dir, file))
    });
    return filelist
};

const compile = () => {
    return gulp.src(path.normalize('components/**/*.js'))
        .pipe(babel())
        .on('error', log)
        .pipe(gulp.dest('lib'));
};

gulp.task('build', compile);

gulp.task('test', (done) => {
    compile().on('end', () => {
        execSync('npx mjml test/index.mjml -o test/index.html');
        execSync('npx mjml test/extends.mjml -o test/extends.html');
        done();
    })
});

gulp.task('watch', () => {
    compile();
    return watch([
        path.normalize('components/**/*.js'),
        path.normalize('index.mjml'),
    ], compile)
});
