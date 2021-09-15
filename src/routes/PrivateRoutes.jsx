import Dashboard from '../pages/Dashboard'
import Schedule from '../pages/Schedule'
import Message from '../pages/Message'
import Programs from '../pages/Programs'
import Therapists from '../pages/Therapists'
import { routes } from './index'
import MyStory from '../pages/MyStory'
import Settings from '../pages/Settings'
import LogOut from '../pages/LogOut'


export const PrivateRoutes = [
    { 'component': Dashboard, 'link': routes.Dashboard },
    { 'component': Schedule, 'link': routes.Schedule },
    { 'component': Message, 'link': routes.Message },
    { 'component': Programs, 'link': routes.Programs },
    { 'component': Therapists, 'link': routes.Therapist },
    { 'component': MyStory, 'link': routes.MyStory },
    { 'component': Settings, 'link': routes.Settings },
    { 'component': LogOut, 'link': routes.LogOut },
]