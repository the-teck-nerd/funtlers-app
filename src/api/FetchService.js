import APIServices from "./API-Services";
import apiURL from "./API-Url";

class FetchService {
  /**Activity Conteroller */

  //Todo: make it all PascalCase
  getAllActivities(ownerid) {
    let apicall = APIServices.GET(apiURL() + "Activity?ownerid=" + ownerid);
    return apicall;
  }

  GetActivityById(id) {
    let apicall = APIServices.GET(apiURL() + "Activity?type=id&id=" + id);
    return apicall;
  }
  GetAllActivitiesByPartnerId(id) {
    let apicall = APIServices.GET(apiURL() + "Activity?type=partner&id=" + id);
    return apicall;
  }

  AddActivity(activity) {
    let apicall = APIServices.POST(apiURL() + "Activity", activity);

    return apicall;
  }

  UpdateActivity(activity) {
    let apicall = APIServices.PUT(apiURL() + "Activity", activity);
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
  RegisterUser(user) {
    let apicall = APIServices.POST(apiURL() + "User", user);
    return apicall;
  }
  UpdateUser(user) {
    let apicall = APIServices.PUT(apiURL() + "User", user);
    return apicall;
  }

  UpdateUserType(user) {
    let apicall = APIServices.PUT(apiURL() + "User?type=admin", user);
    return apicall;
  }

  VerifyUser(user) {
    let apicall = APIServices.POST(apiURL() + "Login", user);
    return apicall;
  }

  GetPartner() {
    let apicall = APIServices.GET(apiURL() + "Partner");
    return apicall;
  }

  AddPartner(partner) {
    let apicall = APIServices.POST(apiURL() + "Partner", partner);
    return apicall;
  }

  UpdatePartner(partner) {
    let apicall = APIServices.PUT(apiURL() + "Partner", partner);
    return apicall;
  }

  DeletePartner(partner) {
    let apicall = APIServices.DELETE(apiURL() + "Partner", partner);
    return apicall;
  }

  //This api call will return entire order object which is basically a join in the
  // the database of user, partner, order and activity object
  GetOrderByOrderId(orderId) {
    
    let apicall = APIServices.GET(apiURL() + "Order?id=" + orderId+"&type=orderactivity");
    return apicall;
  }

  GetOrdersByUserId(userId) {
    let apicall = APIServices.GET(apiURL() + "Order?id=" + userId);
    return apicall;
  }

  GetOrderByPartnerId(id, type) {
    let apicall = APIServices.GET(
      apiURL() + "Order?id=" + id + "&type=" + type + ""
    );
    return apicall;
  }

  GetAnalytics() {
    let apicall = APIServices.GET(apiURL() + "Analytics");
    return apicall;
  }

  GetAnalyticsById(id) {
    let apicall = APIServices.GET(apiURL() + "Analytics?type=Partner&id=" + id);
    return apicall;
  }


  GetUsers() {
    let apicall = APIServices.GET(apiURL() + "User");
    return apicall;
  }

  GetAnalyticsPartner() {
    let apicall = APIServices.GET(apiURL() + "Analytics?type=AllPartner&id=0");
    return apicall;
  }

  GetAnalyticsActivity() {
    let apicall = APIServices.GET(apiURL() + "Analytics?type=AllActivity&id=0");
    return apicall;
  }


  VerifyOrder(order) {
    let apicall = APIServices.PUT(apiURL() + "Order",order);
    return apicall;
  }


}

export default new FetchService();
