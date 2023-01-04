export function getAllActivityCategories() {
  const categories = [
    {
      value: "default",
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
      value: "default",
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
  ];

  return types;
}
export function getAllCities() {
  const cities = [
    {
      value: "default",
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
    // {
    //   value: "stavanger",
    //   label: "Stavanger",
    // },
    // {
    //   value: "trondheim",
    //   label: "Trondheim",
    // },
    // {
    //   value: "tromsø",
    //   label: "Tromsø",
    // },
  ];
  return cities;
}

export function getBudgetOptions() {
  const budgetOptions = [
    {
      value: "default",
      label: "Pris per person",
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
      value: "default",
      label: "Antall",
    },
    {
      value: "all",
      label: "Alle",
    },
    {
      value: "0",
      label: "1 Person",
    },
    {
      value: "1",
      label: "2 - 5 Personer",
    },
    {
      value: "2",
      label: "6 - 9 Personer",
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
    filterModal.types = filterModal.types.filter(
      (x) => x.value !== "all" && x.value !== "default"
    );
    filterModal.categories = filterModal.categories.filter(
      (x) => x.value !== "all" && x.value !== "default"
    );
    filterModal.budgetOptions = filterModal.budgetOptions.filter(
      (x) => x.value !== "all" && x.value !== "default"
    );
    filterModal.peopleNumber = filterModal.peopleNumber.filter(
      (x) => x.value !== "all" && x.value !== "default"
    );
    filterModal.cities = filterModal.cities.filter(
      (x) => x.value !== "all" && x.value !== "default"
    );
  }

  return filterModal;
}

export function getFilteredActivities(activities, filterModal) {
  const [minPeople, maxPeople] = getMinMax(filterModal.peopleNumber);
  const [minBudget, maxBudget] = getBudget(filterModal.budget);

  const filteredActivities = activities.filter(
    (activity) =>
      (filterModal.city === "all" ||
        filterModal.city === "default" ||
        activity.city === filterModal.city) &&
      (filterModal.type === "all" ||
        filterModal.type === "default" ||
        activity.activityType === filterModal.type) &&
      (filterModal.category === "all" ||
        filterModal.category === "default" ||
        activity.category === filterModal.category) &&
      (filterModal.peopleNumber === "all" ||
        filterModal.peopleNumber === "default" ||
        (activity.minPerson >= minPeople && activity.minPerson <= maxPeople)) &&
      (filterModal.budget === "all" ||
        filterModal.budget === "default" ||
        (activity.price >= minBudget && activity.price <= maxBudget))
  );

  return filteredActivities;
}

export function getMinMax(peopleNumber) {
  let min = 0;
  let max = 0;

  if (peopleNumber === "0") {
    min = 1;
    max = 1;
  } else if (peopleNumber === "1") {
    min = 2;
    max = 5;
  } else if (peopleNumber === "2") {
    min = 6;
    max = 9;
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

export function getLabelByValue(filterArray, value) {
  if (!filterArray || filterArray.length === 0) return;
  else {
    const label = filterArray.find((x) => x.value === value)?.label;
    return label;
  }
}
