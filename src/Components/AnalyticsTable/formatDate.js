export const formatDate = (inputDateStr) => {
    // Remove the time part from the input string
    const dateOnlyStr = inputDateStr.split("T")[0];
    // Convert the date-only string to a Date object
    const inputDate = new Date(dateOnlyStr);

    // Define month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Format the date into desired output format
    const outputDateStr = `${inputDate.getDate()} ${
      monthNames[inputDate.getMonth()]
    } ${inputDate.getFullYear()}`;

    return outputDateStr;
  };

