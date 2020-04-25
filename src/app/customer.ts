export class Customer {
  constructor(data){
    this.licensePlate = data.licensePlate
  }

  licensePlate: string;
}

export const customerConverter = {
  toFirestore: function(customer) {
    return {
      licensePlate: customer.first
    }
  },
  fromFirestore: function(snapshot, options){
    const data = snapshot.data(options);
    return new Customer(data)
  }
};
