import {create} from "zustand";

export const useDoctorStore = create((set) => ({
    doctors: [],
    setDoctors: (doctors) => set({ doctors}),

    createDoctors : async(newDoctor) => {

        if(!newDoctor.fullName || !newDoctor.email || !newDoctor.licenseNumber || !newDoctor.Specialization) {
            return {success: false, message:"Please fill in all the fields"} ;
        }

        try{
            const res = await fetch("/api/v1/doctors/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDoctor),
            });

            if(!res.ok) {
                const errorData = await res.json();
                return { success: false, message: errorData?.message ||
                    "Failed to create doctor profile" };
             }

                const data = await res.json();

                set((state) => ({doctors: [...state.doctors, data.data] }));

                return { success: true, message: "Doctor profile created successfully" };
            } catch(error) {
                return { success:false, message: "An error occured while creating the doctor profile"};
            }
        }
}))