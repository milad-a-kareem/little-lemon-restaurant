export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const seats = formData.get("seats");
    const dateTime = formData.get("dateTime");
    alert(`Your Tables reserved successfully. Information:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Number of Reserved Seats: ${seats}
    Reserved for: ${new Date(dateTime).toLocaleString()}
    
    `);

    event.target.reset();
  };
  return (
    <form className="FormContainer" onSubmit={handleSubmit}>
      <h3 className="FormTitle">Table Reservation Form</h3>
      <input
        data-testid="name"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
        minLength={3}
        maxLength={120}
        className="FormInput"
      />
      <input
        data-testid="email"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        className="FormInput"
      />
      <input
        data-testid="phone"
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        required
        className="FormInput"
      />
      <input
        data-testid="seats"
        type="number"
        name="seats"
        id="seats"
        placeholder="Number of seats"
        required
        min={1}
        max={100}
        className="FormInput"
      />
      <input
        data-testid="dateTime"
        type="datetime-local"
        name="dateTime"
        id="dateTime"
        placeholder="Date and Time"
        required
        className="FormInput"
      />
      <input data-testid="submit" className="FormInput" type="submit" value="Reserve Now" />
    </form>
  );
}
