export class Car{
  carRegno!: string;
  carMake!: string;
  carType!: string;
  carFuel!: string;
  carShift!: string;
  carOwnercount!: string;
  carPrice!: number;
  carYear!: number;
  carLocation!: string;
  carStatus!: string;
  customerPhno!: number;

  constructor() {
  }
}

// create table CAR(
//   CAR_REGNO varchar(10) primary key,
//   CAR_MAKE varchar(20) not null,
//   CAR_TYPE varchar(20) not null,
//   CAR_FUEL varchar(20) not null,
//   CAR_SHIFT varchar(20) not null,
//   CAR_OWNERCOUNT varchar(20) not null,
//   CAR_PRICE int not null,
//   CAR_YEAR int not null,
//   CAR_LOCATION varchar(20) not null,
//   CAR_STATUS varchar(20) default "ACTIVE",
//   CUS_PHNO bigint(10) not null,
//   foreign key(CUS_PHNO) references CUSTOMER(CUS_PHNO)
// );
