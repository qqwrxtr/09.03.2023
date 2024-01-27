function validateDate(dateString, format) {

    if (format !== 'DD/MM/YYYY' && format !== 'YYYY/MM/DD') {
      return false;
    }
  
    const date = new Date(dateString);
  
    if (
      !isNaN(date.getTime()) &&
      (format === 'DD/MM/YYYY' && dateString === `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`) ||
      (format === 'YYYY/MM/DD' && dateString === `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
    ) {
      return true;
    }
  
    return false;
  }

  const dateString = '09/03/2022';
const format = 'DD/MM/YYYY';

const isValidDate = validateDate(dateString, format);

if (isValidDate) {
  console.log('Data este validă.');
} else {
  console.log('Data nu este validă.');
}

const dateString2 = '2022/03/09';
const format2 = 'YYYY/MM/DD';

const isValidDate2 = validateDate(dateString, format);

if (isValidDate2) {
  console.log('Data este validă.');
} else {
  console.log('Data nu este validă.');
}
