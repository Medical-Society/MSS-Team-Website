export interface IAdmin {
    name: string;
    email: string;
}

export interface IAuth {
    token: string;
    admin: IAdmin;
}

export interface IDoctor {
    availableTime: {
      limit: number;
      _id: string;
      weekdays: Record<string, unknown>;
    };
    _id: string;
    englishFullName: string;
    arabicFullName: string;
    email: string;
    specialization: string;
    clinicAddress: string;
    nationalID: string;
    phoneNumber: string;
    birthdate: string;
    gender: string;
    status: string;
    isVerified: boolean;
    reviews: string[];
    posts: string[];
    avatar: string;
    createdAt: string;
    updatedAt: string;
    completeImages: string[];
  }