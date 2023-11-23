const getSleepHours = (day) => {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 7;
    } else if (day === "wednesday") {
      return 5;
    } else if (day === "thursday") {
      return 6;
    } else if (day === "friday") {
      return 9;
    } else if (day === "saturday") {
      return 4;
    } else if (day === "sunday") {
      return 10;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  
  const getIdealSleepHours = () => {
    const idealSleepHours = 8;
    return idealSleepHours * 7;
  };
  
  const calculateSleeptDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log(
        "You got the perfect amount of sleep. Congrats, Sleeping Beauty"
      );
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You got " +
          (actualSleepHours - idealSleepHours) +
          " hour(s) more sleep than you needed this week. Do not sleep that much, you lazy ass"
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Go to sleep NOW, you insomniac"
      );
    } else {
      return "error";
    }
  };
  
  calculateSleeptDebt();