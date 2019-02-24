import DjangoBlock from "./components/DjangoBlock"
import DjangoInclude from "./components/DjangoExtends"
import DjangoExtends from "./components/DjangoExtends"
import {registerComponent} from 'mjml-core'

registerComponent(DjangoBlock);
registerComponent(DjangoInclude);
registerComponent(DjangoExtends);
