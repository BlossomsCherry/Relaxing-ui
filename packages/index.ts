//导入所有组件
import rButton from './Button/index'
import rInput from './Input/index'
import rSpace from './Space/index'
import rRate from './Rate/index'
import rDropdown from './Dropdown/index'
import rRow from './rRow/index'
import rCol from './rCol/index'
import rSwitch from './Switch'
// import Loading from './Loading/index'
import Message from './Message/index'
import rBadge from './Badge/index'
import rTabs from './Tabs/index'
import rScrollbar from './Scrollbar/index'
import rTable from './Table/index'
import rDialog from './Dialog/index'
import Confirm from './Confirm/index'
import rDrawer from './Drawer/index'
import rRadio from './Radio/index'
import rSkeleton from './Skeleton/index'
import Notification from './Notification/index'

const components = [
  rButton,
  rInput,
  rSpace,
  rRate,
  rDropdown,
  rRow,
  rCol,
  rSwitch,
  rBadge,
  rTabs,
  rScrollbar,
  rTable,
  rDialog,
  rDrawer,
  rRadio,
  rSkeleton
]

const install = (App: any) => {
  components.forEach((item) => {
    App.use(item)
  })
  App.config.globalProperties.$message = Message
  // App.config.globalProperties.$loading = Loading
  App.config.globalProperties.$confirm = Confirm
  App.config.globalProperties.$notification = Notification
}

const RelaxUi = {
  install
}

export {
  install,
  rButton,
  rInput,
  rSpace,
  rRate,
  rDropdown,
  rRow,
  rCol,
  rSwitch,
  Message,
  // Loading,
  Confirm,
  rBadge,
  rTabs,
  rScrollbar,
  rTable,
  rDialog,
  rDrawer,
  rRadio,
  rSkeleton,
  Notification
}
export default RelaxUi
