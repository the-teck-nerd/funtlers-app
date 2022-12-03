import APIServices from "./API-Services";
import apiURL from "./API-Url";

class FetchService {
  /**Activity Conteroller */
  getAllActivities(ownerid) {
    let apicall = APIServices.GET(apiURL + "Activity?ownerid=" + ownerid);
    return apicall;
  }

  AddActivity(activity) {
    let apicall = APIServices.POST(apiURL + "Activity", activity);

    return apicall;
  }

  UpdateActivity(activity) {
    let apicall = APIServices.PUT(apiURL + "UpdateActivity", activity);
    return apicall;
  }

  DeleteActivity(activity) {
    let apicall = APIServices.POST(apiURL + "DeleteActivity", activity);
    return apicall;
  }

  BookAcitvity(activity) {
    let apicall = APIServices.POST(apiURL + "Order", activity);
    return apicall;
  }
}

export default new FetchService();
