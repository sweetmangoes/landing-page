export default function Form() {
  return (
    <form action="/api/form" method="post">
      <label htmlFor="first">First Name</label>
      <input type="text" id="first" name="first" required />
 
      <label htmlFor="last">Last Name</label>
      <input type="text" id="last" name="last" required />

      <label htmlFor="business">Business Name</label>
      <input type="text" id="business" name="business" required />

      <label htmlFor="email"> Business email</label>
      <input type="text" id="email" name="email" required />

      <label htmlFor="phone">Phone Number</label>
      <input type="number" id="phone" name="phone" required />
 
      <button type="submit">Submit</button>
    </form>
  );
}