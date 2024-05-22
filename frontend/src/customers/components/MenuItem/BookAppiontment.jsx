
// import React, { useState } from 'react';

// const BookAppointment = ({ formData, setFormData }) => {
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
//   const timeSlots = generateTimeSlots();

//   // Function to generate time slots in 12-hour format with 30-minute intervals
//   function generateTimeSlots() {
//     const timeSlots = [];
//     let hour = 9;
//     let minute = 0;
//     let period = 'AM';
//     while (hour < 20 || (hour === 20 && minute === 0)) {
//       let hour12 = hour > 12 ? hour - 12 : hour;
//       let hourString = hour12.toString().padStart(2, '0');
//       let minuteString = minute === 0 ? '00' : '30';
//       timeSlots.push(`${hourString}:${minuteString} ${period}`);
//       if (hour === 12 && minute === 0) {
//         period = 'PM';
//       }
//       if (hour === 20 && minute === 0) {
//         break;
//       }
//       if (minute === 30) {
//         hour++;
//         minute = 0;
//       } else {
//         minute = 30;
//       }
//     }
//     return timeSlots;
//   }

//   return (
//     <>
//       <div className='p-4'>
        
//         <div className='multi-fields grid grid-cols-1 md:grid-cols-2 gap-4'>
//           {/* Input fields */}
//           <input 
//             type='text' 
//             placeholder='First Name' 
//             className=" text-black"
//             onChange={(e) => setFormData({ ...formData, ["firstname"]: e.target.value })}
//             value={formData["firstname"]}
//           />
//           <input 
//             type='text' 
//             placeholder='Last Name' 
//             className=" text-black"
//             onChange={(e) => setFormData({ ...formData, ["lastname"]: e.target.value })}
//             value={formData["lastname"]}
//           />
//           <input 
//             type='email' 
//             placeholder='Email Address' 
//             className=" text-black"
//             onChange={(e) => setFormData({ ...formData, ["email"]: e.target.value })}
//             value={formData["email"]}
//           />
//           <input 
//             type='Number' 
//             placeholder='Phone' 
//             className="input-field text-black"
//             onChange={(e) => setFormData({ ...formData, ["phone"]: e.target.value })}
//             value={formData["phone"]}
//           />
//           {/* Calendar */}
//           <input 
//             type="date" 
//             placeholder="Calendar" 
//             className="input-field text-black"
//             onChange={(e) => setFormData({ ...formData, ["date"]: e.target.value })}
//             value={formData["date"]}
//           />
//           {/* Time Slot */}
//           <select
//             className="input-field text-black"
//             onChange={(e) => {
//               setSelectedTimeSlot(e.target.value);
//               setFormData({ ...formData, ["time"]: e.target.value });
//             }}
//             value={formData["time"]}
//           >
//             <option value="">Select a time slot</option>
//             {timeSlots.map((slot, index) => (
//               <option key={index} value={slot}>{slot}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookAppointment;

import React, { useState } from 'react';

const BookAppointment = ({ formData, setFormData }) => {
  const timeSlots = generateTimeSlots();

  function generateTimeSlots() {
    const timeSlots = [];
    let hour = 9;
    let minute = 0;
    let period = 'AM';
    while (hour < 20 || (hour === 20 && minute === 0)) {
      let hour12 = hour > 12 ? hour - 12 : hour;
      let hourString = hour12.toString().padStart(2, '0');
      let minuteString = minute === 0 ? '00' : '30';
      timeSlots.push(`${hourString}:${minuteString} ${period}`);
      if (hour === 12 && minute === 0) {
        period = 'PM';
      }
      if (hour === 20 && minute === 0) {
        break;
      }
      if (minute === 30) {
        hour++;
        minute = 0;
      } else {
        minute = 30;
      }
    }
    return timeSlots;
  }

  return (
    <div className='p-4'>
      <div className='multi-fields grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input
          type='text'
          placeholder='First Name'
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          value={formData.firstname}
        />
        <input
          type='text'
          placeholder='Last Name'
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          value={formData.lastname}
        />
        <input
          type='email'
          placeholder='Email Address'
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <input
          type='number'
          placeholder='Phone'
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
        />
        <input
          type="date"
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          value={formData.date}
        />
        <select
          className="input-field text-black"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          value={formData.time}
        >
          <option value="">Select a time slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BookAppointment;

