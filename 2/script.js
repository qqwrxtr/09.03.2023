
const birthday = new Date("09/03/1990");

const today = new Date();

const diffInMs = today.getTime() - birthday.getTime();

const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

const currentYear = today.getFullYear();

const birthYear = birthday.getFullYear();
const age = currentYear - birthYear;


if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
  console.log(`La Mulți Ani! Astăzi împlinești ${age} ani.`);
} else {
  console.log(`Mai sunt ${365 - diffInDays} zile până la ziua ta de naștere.`);
}
