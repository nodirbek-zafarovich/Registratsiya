import { useState } from "react";

const HeaderComp = () => {
  const [focusedField, setFocus] = useState(null);
  const [formData, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    mobile: "",
    phone: "",
    work: "",
    company: "",
    course: "",
    comments: "",
  });

  const handleFocus = (field) => {
    setFocus(field);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generateNumberOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i);
    }
    return options;
  };

  const Logo =
    "https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo-white.svg";

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#3d7a9f] py-20">
      <div className="bg-[#f5fdff] p-8 rounded-lg shadow-md w-1/2">
        <h1 className="text-3xl font-medium mb-4 text-[#18557d]">
          Registration Form
        </h1>
        <p className=" font-medium mb-8" style={{ color: "#18557d" }}>
          Fill out the form carefully for registration
        </p>
        <div class="border-b-2  mb-8 border-[#18557d]"></div>
        <div className=" mb-8 border-[#18557d]"></div>
        <form onSubmit={handleSubmit}>
          <div
            className={`mb-4  ${
              focusedField === "firstName" ||
              focusedField === "middleName" ||
              focusedField === "lastName"
            } p-2`}
          >
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#18557d" }}
            >
              Student Name
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onFocus={() => handleFocus("firstName")}
                onChange={handleChange}
                className="border rounded-md p-2 w-full hover:border hover:border-blue-800 outline-none"
                required
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onFocus={() => handleFocus("middleName")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onFocus={() => handleFocus("lastName")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className={`mb-4 w-[65%] ${
                focusedField === "birthMonth" ||
                focusedField === "birthDay" ||
                focusedField === "birthYear"
              } p-2`}
            >
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#18557d" }}
              >
                Birth Date
              </label>
              <div className="grid grid-cols-3 gap-4">
                <select
                  name="birthMonth"
                  value={formData.birthMonth}
                  onFocus={() => handleFocus("birthMonth")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                >
                  <option value="">Month</option>
                  {generateNumberOptions(1, 12).map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="birthDay"
                  value={formData.birthDay}
                  onFocus={() => handleFocus("birthDay")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                >
                  <option value="">Day</option>
                  {generateNumberOptions(1, 31).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  name="birthYear"
                  value={formData.birthYear}
                  onFocus={() => handleFocus("birthYear")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                >
                  <option value="">Year</option>
                  {generateNumberOptions(1900, new Date().getFullYear()).map(
                    (year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className={`mb-4 w-[30%] ${focusedField === "gender"} p-2`}>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#18557d" }}
              >
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onFocus={() => handleFocus("gender")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                required
              >
                <option value="Please Select">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div
            className={`mb-4 ${
              focusedField === "address" ||
              focusedField === "address2" ||
              focusedField === "city" ||
              focusedField === "state" ||
              focusedField === "zip"
            } p-2`}
          >
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#18557d" }}
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onFocus={() => handleFocus("address")}
              onChange={handleChange}
              className="border hover:border hover:border-blue-800 my-4 rounded-md p-2 w-full mb-2 outline-none"
              required
            />
            <input
              type="text"
              name="address2"
              placeholder="Street Address Line 2"
              value={formData.address2}
              onFocus={() => handleFocus("address2")}
              onChange={handleChange}
              className="border hover:border hover:border-blue-800 my-4 rounded-md p-2 w-full mb-2 outline-none"
            />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onFocus={() => handleFocus("city")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 my-4 rounded-md p-2 w-full outline-none"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State / Province"
                value={formData.state}
                onFocus={() => handleFocus("state")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 my-4 rounded-md p-2 w-full outline-none"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="Postal / Zip Code"
                value={formData.zip}
                onFocus={() => handleFocus("zip")}
                onChange={handleChange}
                className="border hover:border hover:border-blue-800 my-4 rounded-md p-2 w-full outline-none"
                required
              />
            </div>
          </div>
          <div
            className={`mb-4 ${
              focusedField === "email" || focusedField === "mobile"
            } p-2`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Student E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: myname@example.com"
                  value={formData.email}
                  onFocus={() => handleFocus("email")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="(000) 000-0000"
                  value={formData.mobile}
                  onFocus={() => handleFocus("mobile")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                />
              </div>
            </div>
          </div>
          <div
            className={`mb-4 ${
              focusedField === "phone" || focusedField === "work"
            } p-2`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(000) 000-0000"
                  value={formData.phone}
                  onFocus={() => handleFocus("phone")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Work Number
                </label>
                <input
                  type="tel"
                  name="work"
                  placeholder="(000) 000-0000"
                  value={formData.work}
                  onFocus={() => handleFocus("work")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                />
              </div>
            </div>
          </div>
          <div
            className={`mb-4 ${
              focusedField === "company" || focusedField === "course"
            } p-2`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onFocus={() => handleFocus("company")}
                  onChange={handleChange}
                  className="border hover:border hover:border-blue-800 rounded-md p-2 w-full outline-none"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#18557d" }}
                >
                  Courses
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onFocus={() => handleFocus("course")}
                  onChange={handleChange}
                  className="hover:border hover:border-blue-800 border rounded-md p-2 w-full outline-none"
                  required
                >
                  <option value="Please Select">Please Select</option>
                  <option value="Course 1">Please Selected</option>
                  <option value="Course 2">Windows 8</option>
                  <option value="Course 3">English 101</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`mb-4 ${focusedField === "comments"} p-2`}>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#18557d" }}
            >
              Additional Comments
            </label>
            <textarea
              name="comments"
              placeholder="Additional Comments"
              value={formData.comments}
              onFocus={() => handleFocus("comments")}
              onChange={handleChange}
              className=" outline-none border hover:border hover:border-blue-800 rounded-md p-2 w-full "
              rows="4"
            />
          </div>
          <div className="border-b-2 mb-8 border-[#18557d]"></div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-[10px] px-16 text-xl font-medium rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="bg-[#200058] fixed bottom-0 w-full py-3 flex justify-between items-center">
        <img
          src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo-white.svg"
          alt=""
          className="w-36 mx-4"
        />
        <div className="flex gap-4 items-center px-5">
          <p className="text-white">Now create your own Jotform - It's free!</p>
          <button className="text-white h-full py-1 px-3 bg-green-600 rounded-sm text-[14px] font-medium">
            Create your own Jotform
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
