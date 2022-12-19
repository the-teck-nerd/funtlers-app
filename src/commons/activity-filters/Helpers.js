export function getAllActivityCategories() {
  const categories = [
    {
      value: "all",
      label: "Kategori",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "vennegjeng",
      label: "Vennegjeng",
    },
    {
      value: "datenight",
      label: "Datenight",
    },
    {
      value: "barnebursdag",
      label: "Barnebursdag",
    },
    {
      value: "bursdag",
      label: "Bursdag",
    },
    {
      value: "familiedag",
      label: "Familiedag",
    },
    {
      value: "egentid",
      label: "Egentid",
    },
    {
      value: "dagsutflukt",
      label: "Dagsutflukt",
    },
    {
      value: "teambuilding",
      label: "Teambuilding",
    },
    {
      value: "sommerfest",
      label: "Sommerfest",
    },
    {
      value: "afterWork",
      label: "After work",
    },
    {
      value: "julebord",
      label: "Julebord",
    },
    {
      value: "utdrikningslag",
      label: "Utdrikningslag",
    },
  ];

  return categories;
}
export function getAllActivityTypes() {
  const types = [
    {
      value: "all",
      label: "Type",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "fysisk",
      label: "Fysisk",
    },
    {
      value: "digital",
      label: "Digital",
    },
    {
      value: "online",
      label: "Online"
    }
  ];

  return types;
}
export function getAllCities() {
  const cities = [
    {
      value: "all",
      label: "Sted",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "oslo",
      label: "Oslo",
    },
    {
      value: "bergen",
      label: "Bergen",
    },
    {
      value: "stavanger",
      label: "Stavanger",
    },
    {
      value: "trondheim",
      label: "Trondheim",
    },
    {
      value: "tromsø",
      label: "Tromsø",
    },
  ];
  return cities;
}

export function getBudgetOptions() {
  const budgetOptions = [
    {
      value: "all",
      label: "Pris",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "1",
      label: "0 - 100 NOK",
    },
    {
      value: "2",
      label: "101 - 200 NOK",
    },
    {
      value: "3",
      label: "201 - 349 NOK",
    },
    {
      value: "4",
      label: "350+ NOK",
    },
  ];

  return budgetOptions;
}

export function getNumberOfPeopleOptions() {
  const peopleOptions = [
    {
      value: "all",
      label: "Antall",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "1",
      label: "1 - 5 Personer",
    },
    {
      value: "2",
      label: "6 - 10 Personer",
    },
    {
      value: "3",
      label: "10+ Personer",
    },
  ];

  return peopleOptions;
}

export function getFilters(type) {
  let filterModal = {
    categories: "",
    types: "",
    cities: "",
    peopleNumber: "",
    budgetOptions: "",
  };

  filterModal.types = getAllActivityTypes();
  filterModal.categories = getAllActivityCategories();
  filterModal.budgetOptions = getBudgetOptions();
  filterModal.peopleNumber = getNumberOfPeopleOptions();
  filterModal.cities = getAllCities();

  //Removing all type pf option if we are add any activity
  if (type === "add") {
    filterModal.types = filterModal.types.filter(x=>x.value!=="all")
    filterModal.categories=filterModal.categories.filter(x=>x.value!=="all");
    filterModal.budgetOptions=filterModal.budgetOptions.filter(x=>x.value!=="all");
    filterModal.peopleNumber=filterModal.peopleNumber.filter(x=>x.value!=="all");
    filterModal.cities=filterModal.cities.filter(x=>x.value!=="all");
  }

  return filterModal;
}

export function getFilteredActivities(activities, filterModal) {
  const [minPeople, maxPeople] = getMinMax(filterModal.peopleNumber);
  const [minBudget, maxBudget] = getBudget(filterModal.budget);

  const filteredActivities = activities.filter(
    (activity) =>
      (filterModal.city === "all" || activity.city === filterModal.city) &&
      (filterModal.type === "all" ||
        activity.activityType === filterModal.type) &&
      (filterModal.category === "all" ||
        activity.category === filterModal.category) &&
      (filterModal.peopleNumber === "all" ||
        (activity.minPerson >= minPeople && activity.minPerson <= maxPeople)) &&
      (filterModal.budget === "all" ||
        (activity.price >= minBudget && activity.price <= maxBudget))
  );

  return filteredActivities;
}

export function getMinMax(peopleNumber) {
  let min = 0;
  let max = 0;

  if (peopleNumber === "1") {
    min = 1;
    max = 5;
  } else if (peopleNumber === "2") {
    min = 6;
    max = 10;
  } else {
    min = 10;
    max = 999;
  }

  return [min, max];
}

export function getBudget(budget) {
  let min = 0;
  let max = 0;

  if (budget === "1") {
    min = 0;
    max = 100;
  } else if (budget === "2") {
    min = 101;
    max = 200;
  } else if (budget === "3") {
    min = 201;
    max = 349;
  } else {
    min = 350;
    max = 99999;
  }

  return [min, max];
}
