import { getDepartment } from "../departmentmodule/departmentreducer";

export const departmentData = [
    {'departmentid': 1, 'departmentname': 'PMD', 'departmentfullname': 'Property Management Department'},
    {'departmentid': 2, 'departmentname': 'ITD', 'departmentfullname': 'Information Technology Department'},
    {'departmentid': 3, 'departmentname': 'CD',  'departmentfullname': 'Commercial Department'},
];
//export const departmentData = getDepartment();

export const workorder =[
    {}
]

export const positionData =[
    {'positionid': 1, 'positionname':'ITT', 'positionfullname': 'Information Technology Technician','departmentid': 2},
    {'positionid': 2, 'positionname':'ITM', 'positionfullname': 'Information Technology Manager','departmentid': 2},
    {'positionid': 3, 'positionname':'CM', 'positionfullname': 'Commercial Manager','departmentid': 3},
    {'positionid': 4, 'positionname':'MO', 'positionfullname': 'Marketing Officer','departmentid': 3},
    {'positionid': 5, 'positionname':'SC', 'positionfullname': 'Slot Coordinator','departmentid': 3},
    {'positionid': 6, 'positionname':'CO', 'positionfullname': 'Commercial Officer','departmentid': 3},
];

export const UserData = [
    {username:'admin', pwd:'<itd12345678>',usergroup:'admin'},
    {username:'user', pwd:'user',usergroup:'user'},
    {username:'itt', pwd:'itt',usergroup:'itt'},
];

export const UserGroupPermission =[
    {
        usergroup:'admin',
        permission: [1,2,3,4,5,6,7],
    },
    /*{
        usergroup:'itt',
        permission:[3,4,5]
    },*/
    {
        usergroup:'itt',
        permission:[3,6]
    },
    {
        usergroup:'user',
        permission:[4,6],
    }
];

export const SOPDocument = [{
    documenttype:'Procedure',
    documentpath:'./../data/sopdata/pr',
    subdocument: [
    {
        procudureref: 'saiprit001',
        displaytext: 'PR IT 001 - IT Services request',
        filename: 'saiprit001.pdf',
        downloadfilename: 'SAI PR IT 001.pdf'
    }]},{    
    documenttype:'Form',
    documentpath:'./../data/sopdata/fr',
    subdocument:[
    {
        formref: 'saifrit00101',
        displaytext: 'FR IT 001 01 - IT Work order',
        filename: 'FR IT 001-01 IT Work Order.pdf',
        downloadfilename: 'FR IT 001-01 IT Work order.pdf'
    },{
        formref: 'saifrit00102',
        displaytext: 'FR IT 001-02 - Request Equipment',
        filename: 'FR IT 001-02 - Request Equipment v1.pdf',
        downloadfilename: 'FR IT 001-02 - Request Equipment.pdf',
    },{
        formref: 'saifrit00103',
        displaytext: 'FR IT 001-03 - Equipment List',
        filename: 'FR IT 001-03 - Equipment List.pdf',
        downloadfilename: 'FR IT 001-03 - Equipment list.pdf'
    },{
        formref: 'saifrit00104',
        displaytext: 'FR IT 001-04 - Request for connection - External customer',
        filename:'FR IT 001-04 - Request for connection - External Customer.pdf',
        downloadfilename: 'FR IT 001-04 - Request for connection.pdf',
    },{
        formref: 'saifrit00105',
        displaytext: 'FR IT 001-05 - Contractor List',
        filename: 'FR IT 001-05 - Contractor List.pdf',
        downloadfilename: 'FR IT 001-05 - Contractor List.pdf',
    },{
        formref: 'saifrit00120',
        displaytext: 'FR IT 001-20 - Goods issues',
        filename: 'FR IT 001-20 - Goods Issues.pdf',
        downloadfilename: 'FR IT 001-20 - Goods Issues.pdf',
    },{
        formref: 'saifrit00121',
        displaytext: 'FR IT 001-21 - Stock List',
        filename: 'FR IT 001-21 - Stock List.pdf',
        downloadfilename: 'FR IT 001-21 - Stock List.pdf',
    },{
        formref: 'saifrit00214',
        displaytext: 'FR IT 002-14 - IT Equipment and Spare part List',
        filename: 'FR IT 002-14 - IT Equipment and Spare part List.pdf',
        downloadfilename: 'FR IT 002-14 - IT Equipment and Spare part List.pdf',
    }]
}];