import { useParams } from "react-router-dom";
import { useGetDoctorByIdQuery } from "../app/services/DoctorsApi"
import { IDoctor } from "../interfaces";

interface IProps {}

const DoctorDetails = ({}: IProps) => {
    const { id } = useParams<{ id: string | undefined }>();
    if (!id) return <div>Invalid ID</div>;

    const {data, isLoading, isError} = useGetDoctorByIdQuery(id)
    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error: </div>

    const doctor: IDoctor = data?.data?.doctor
    const { englishFullName, arabicFullName, email, specialization, status, createdAt, isVerified, nationalID, phoneNumber, gender, clinicAddress, birthdate } = doctor
    const doctorDetailsArray = [
        { field: "Full Name in English", value: englishFullName },
        { field: "Full Name in Arabic", value: arabicFullName },
        { field: "Email", value: email },
        { field: "Specialization", value: specialization },
        { field: "Status", value: status },
        { field: "Created At", value: createdAt },
        { field: "Is Verified", value: isVerified },
        { field: "National ID", value: nationalID },
        { field: "Phone Number", value: phoneNumber },
        { field: "Gender", value: gender },
        { field: "Clinic Address", value: clinicAddress },
        { field: "Birthdate", value: birthdate },
    ];
    return (
        <div className="w-full flex flex-col items-center py-10">
            <h1 className="text-2xl font-bold">Doctor Details</h1>
            <DoctorAvatar avatar={doctor.avatar} />
            <DoctorInfo doctorDetailsArray={doctorDetailsArray} />
            {doctor.status === "PENDING" && <DoctorActions />}
        </div>
    )
}

const DoctorAvatar = ({ avatar }: { avatar: string }) => (
    avatar ? <img src={avatar} alt="Doctor Avatar" className="w-40 h-40 rounded-full mt-5"/> : null
);



const DoctorInfo = ({ doctorDetailsArray }: { doctorDetailsArray: { field: string, value: string | boolean }[] }) => (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        {doctorDetailsArray.map(({ field, value }) => (
            <div key={field} className="flex flex-col">
                <span className="font-semibold">{field}</span>
                <span>{value}</span>
            </div>
        ))}
    </div>
);

const DoctorActions = () => (
    <div className="mt-5">
        <button className="bg-green-500 text-white px-3 py-1 rounded-md">Approve</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-2">Reject</button>
    </div>
);

export default DoctorDetails