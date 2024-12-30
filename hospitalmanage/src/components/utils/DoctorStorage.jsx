// Initialize local storage with some sample data if it's empty
const initializeDoctors = () => {
    const sampleDoctors = [
      {
        id: 1,
        name: "Dr. John Doe",
        specialty: "Cardiologist",
        patients: 1000,
        experience: 15,
        image: "https://example.com/doctor1.jpg",
        bio: "Dr. John Doe is a renowned cardiologist with 15 years of experience."
      },
      {
        id: 2,
        name: "Dr. Jane Smith",
        specialty: "Pediatrician",
        patients: 800,
        experience: 10,
        image: "https://example.com/doctor2.jpg",
        bio: "Dr. Jane Smith is a caring pediatrician dedicated to children's health."
      },
      {
        id: 3,
        name: "Dr. Bob Johnson",
        specialty: "Orthopedic Surgeon",
        patients: 1200,
        experience: 20,
        image: "https://example.com/doctor3.jpg",
        bio: "Dr. Bob Johnson is an expert orthopedic surgeon specializing in joint replacements."

      },
      {
        id: 4,
        name: "Dr. Sarah Williams",
        specialty: "Dermatologist",
        patients: 1500,
        experience: 25,
        image: "https://example.com/doctor4.jpg",
        bio: "Dr. Sarah Williams is a skilled dermatologist with 25 years of experience."
      },
      {
        id: 5,
        name: "Dr. Michael Brown",
        specialty: "Neurologist",
        patients: 900,
        experience: 12,
        image: "https://example.com/doctor5.jpg",
        bio: "Dr. Michael Brown is a compassionate neurologist specializing in brain disorders."
      },
      {
        id: 6,
        name: "Dr. Lisa Davis",
        specialty: "Psychiatrist",
        patients: 1100,
        experience: 18,
        image: "https://example.com/doctor6.jpg",
        bio: "Dr. Lisa Davis is a caring psychiatrist dedicated to mental health."
      },


    ];
  
   
      localStorage.setItem('doctors', JSON.stringify(sampleDoctors));
        
  };
  
  // Get all doctors from local storage
  export const getDoctors = () => {
    initializeDoctors();
    return JSON.parse(localStorage.getItem('doctors') || '[]');
  };
  
  // Add a new doctor to local storage
  export const addDoctor = (doctor) => {
    const doctors = getDoctors();
    const newDoctor = { ...doctor, id: Date.now() };
    doctors.push(newDoctor);
    localStorage.setItem('doctors', JSON.stringify(doctors));
    return newDoctor;
  };
  
  // Update a doctor in local storage
  export const updateDoctor = (updatedDoctor) => {
    const doctors = getDoctors();
    const index = doctors.findIndex(d => d.id === updatedDoctor.id);
    if (index !== -1) {
      doctors[index] = updatedDoctor;
      localStorage.setItem('doctors', JSON.stringify(doctors));
    }
    return updatedDoctor;
  };
  
  // Delete a doctor from local storage
  export const deleteDoctor = (id) => {
    const doctors = getDoctors();
    const updatedDoctors = doctors.filter(d => d.id !== id);
    localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
  };
  
  