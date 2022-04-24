import {AUTHORIZATION_COMPANY_ROUTE, MAIN_ROUTE, REGISTRATION_COMPANY_ROUTE} from "./utils/consts";
import Main from "./pages/Main/Main"
import CompanyRegistration from "./pages/CompanyRegistration/CompanyRegistration"
import CompanyAuthorization from "./pages/CompanyAuthorization/CompanyAuthorization"

export const companyRoutes = [
]

export const jobSeekerRoutes = [

]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />
  },
  {
    path: REGISTRATION_COMPANY_ROUTE,
    Component: CompanyRegistration
  },
  {
    path: AUTHORIZATION_COMPANY_ROUTE,
    Component: CompanyAuthorization
  },
]
