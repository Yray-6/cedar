export interface Car {
    id: number;
    name: string;
    image: string;
    seats: number;
    fuelType: string;
    type: string;
    dailyRate: number;
  }
  
  export interface BookingFormData {
    pickupLocation: string;
    pickupDate: string;
    returnDate: string;
    carType: string;
    pickupTime: string;
    returnTime: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  }
  