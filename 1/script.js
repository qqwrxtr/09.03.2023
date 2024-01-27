
const holidays = ["01-01", "03-08", "12-25" , "02-01" , "03-01" , "08-27" , "08-31"];

function calculateDeliveryDate(orderDate) {
  const orderTime = orderDate.getHours() * 60 + orderDate.getMinutes();
  const deliveryDate = new Date(orderDate);
  const dayOfWeek = deliveryDate.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    deliveryDate.setDate(deliveryDate.getDate() + (dayOfWeek === 0 ? 1 : 2));
  }

  if (orderTime > 720) {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
  }

  const monthDay = `${deliveryDate.getMonth() + 1}-${deliveryDate.getDate()}`; 
  if (holidays.includes(monthDay)) {
    deliveryDate.setDate(deliveryDate.getDate() + 1);
    calculateDeliveryDate(deliveryDate); 
  }

  return deliveryDate;
}

const orderDate = new Date("2023-03-09T10:30:00");
const deliveryDate = calculateDeliveryDate(orderDate);
console.log(`Data livrării: ${deliveryDate.toLocaleDateString()}`);
