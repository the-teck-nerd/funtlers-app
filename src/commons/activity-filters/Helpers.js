export function getAllActivityCategories() {
  const categories = [
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
      value: "1",
      label: "0 - 100 NOK",
    },
    {
      value: "2",
      label: "101 - 200 NOK",
    },
    {
      value: "3",
      label: "201 - 350 NOK",
    },
    {
      value: "4",
      label: "351+ NOK",
    },
  ];

  return budgetOptions;
}

export function getNumberOfPeopleOptions() {
  const peopleOptions = [
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
