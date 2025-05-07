import {create} from "zustand";

export const usePatientStore = create((set) => ({
    patients: [],
    setPatients: (patients) => set({ patients}),

    createPatients : async(newPatient) => {

        if(!newPatient.fullName || !newPatient.email || !newPatient.aadharNumber) {
            return {success: false, message:"Please fill in all the fields"} ;
        }

        try{
            const res = await fetch("/api/v1/patients/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPatient),
            });

            if(!res.ok) {
                const errorData = await res.json();
                return { success: false, message: errorData?.message ||
                    "Failed to create patient record" };
             }

                const data = await res.json();

                set((state) => ({patients: [...state.patients, data.data] }));

                return { success: true, message: "Patient created successfully" };
            } catch(error) {
                return { success:false, message: "An error occured while creating the patient record"};
            }
        }
}))