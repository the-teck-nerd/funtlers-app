import APIServices from "./API-Services";


class FetchService {
  
    getAllActivities(ownerid) {
    let apicall = APIServices.GET(
      "https://localhost:44360/" + "Activity?ownerid=" + ownerid
    );
    return apicall;
  }

  AddActivity(activity) {
    let apicall = APIServices.POST(
      "https://localhost:44360/" + "Activity",
      activity
    );

    return apicall;
  }

  UpdateActivity(activity) {
    let apicall = APIServices.PUT(
      "https://localhost:44360/" + "UpdateActivity",
      activity
    );
    return apicall;
  }

  DeleteActivity(activity) {
    let apicall = APIServices.POST(
      "https://localhost:44360/" + "DeleteActivity",
      activity
    );
    return apicall;
  }
}

export default new FetchService();