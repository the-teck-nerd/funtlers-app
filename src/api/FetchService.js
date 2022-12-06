import APIServices from "./API-Services";
import apiURL from "./API-Url";

class FetchService {
  /**Activity Conteroller */

  //Todo: make it all PascalCase
  getAllActivities(ownerid) {
    debugger;
    console.log(apiURL);
    let apicall = APIServices.GET(apiURL() + "Activity?ownerid=" + ownerid);
    return apicall;
  }

  AddActivity(activity) {
    let apicall = APIServices.POST(apiURL() + "Activity", activity);

    return apicall;
  }

  UpdateActivity(activity) {
    let apicall = APIServices.PUT(apiURL() + "UpdateActivity", activity);
    return apicall;
  }

  DeleteActivity(activity) {
    let apicall = APIServices.POST(apiURL() + "DeleteActivity", activity);
    return apicall;
  }

  BookAcitvity(activity) {
    let apicall = APIServices.POST(apiURL() + "Order", activity);
    return apicall;
  }

  //User entity API calls
  RegisterUser(user)
  {
    let apicall = APIServices.POST(apiURL() + "User", user);
    return apicall;
  }


  VerifyUser(user)
  {
    let apicall = APIServices.POST(apiURL() + "Login", user);
    return apicall;
  }

  

  GetPartner()
  {
    let apicall = APIServices.GET(apiURL() + "Partner");
    return apicall;
  }


  AddPartner(partner)
  {
    let apicall = APIServices.POST(apiURL() + "Partner", partner);
    return apicall;
  }


  
  UpdatePartner(partner)
  {
    let apicall = APIServices.PUT(apiURL() + "Partner", partner);
    return apicall;
  }

  DeletePartner(partner)
  {
    let apicall = APIServices.DELETE(apiURL() + "Partner", partner);
    return apicall;
  }





}

export default new FetchService();