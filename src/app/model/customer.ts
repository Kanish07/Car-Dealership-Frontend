export class Customer{

  customerName!: string;
  customerLocation!: string;
  customerPhno!: number;
  customerEmail!: string;
  customerPassword!: string;

  constructor(){ }
}

// CUS_PHNO bigint(10) primary key,
//   CUS_NAME varchar(20) not null,
//   CUS_EMAIL varchar(50) unique not null,
//   CUS_LOCATION varchar(20) not null,
//   CUS_PASSWORD varchar(20) not null
