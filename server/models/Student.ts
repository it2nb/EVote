import { Model, DataTypes } from 'sequelize'
import { sequelize } from "../api/connection";

class Student extends Model {
    declare studentID: string;
    declare studentGender: string;
    declare studentPrefix: string;
    declare studentName: string;
    declare studentSer: string;
    declare studentNickname?: string;
    declare studentNameEn?: string;
    declare studentSerEn?: string;
    declare personnelcardID: string;
    declare nationalityID?: number;
    declare studentEthnicity?: string;
    declare studentReligion?: string;
    declare studentBirthday?: Date;
    declare studentHeight?: number;
    declare studentEeight?: number;
    declare studentBloodgroup?: string;
    declare studentLevel: string;
    declare studentStartyear: number;
    declare areaID?: string;
    declare majorID?: string;
    declare studentAdd?: string;
    declare studentDistrict?: string;
    declare studentPrefecture?: string;
    declare studentProvince?: string;
    declare studentZipcode?: string;
    declare studentPhone?: string;
    declare studentEmail?: string;
    declare studentFatname?: string;
    declare studentFatser?: string;
    declare studentFatstatus?: string;
    declare studentFatcareer?: string;
    declare studentFatsalary?: number;
    declare studentFatphone?: string;
    declare studentMotname?: string;
    declare studentMotser?: string;
    declare studentMotstatus?: string;
    declare studentMotcareer?: string;
    declare studentMotsalary?: number;
    declare studentMotphone?: string;
    declare studentFmmarry?: string;
    declare studentFmmaryother?: string;
    declare studentParname?: string;
    declare studentParser?: string;
    declare studentParcareer?: string;
    declare studentParsalary?: number;
    declare studentParphone?: string;
    declare studentDrugscheck?: string;
    declare studentSuperiority?: string;
    declare studentEndyear: number;
    declare studentEndstatus: string;
    declare studentPicture?: string;
    declare studentPaymethod?: string;
    declare studentBank?: string;
    declare studentBankno?: string;
    declare studentPaydate?: Date;
    declare classID?: string;
}

Student.init(
    {
        studentID: {
        type: DataTypes.STRING(12),
        primaryKey: true
        },
        studentGender: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        studentPrefix: {
            type: DataTypes.STRING(8),
            allowNull: false
        },
        studentName: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        studentSer: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        studentNickname: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        studentNameEn: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentSerEn: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        personnelcardID: {
            type: DataTypes.STRING(13),
            allowNull: false
        },
        nationalityID: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentEthnicity: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentReligion: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        studentBirthday: {
            type: DataTypes.DATE,
            allowNull: true
        },
        studentHeight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentEeight: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentBloodgroup: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        studentLevel: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        studentStartyear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        areaID: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        majorID: {
            type: DataTypes.STRING(8),
            allowNull: true
        },
        studentAdd: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        studentDistrict: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentPrefecture: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentProvince: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentZipcode: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        studentPhone: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        studentEmail: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        studentFatname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentFatser: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentFatstatus: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        studentFatcareer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentFatsalary: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentFatphone: {
            type: DataTypes.STRING(13),
            allowNull: true
        },
        studentMotname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentMotser: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentMotstatus: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        studentMotcareer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentMotsalary: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentMotphone: {
            type: DataTypes.STRING(13),
            allowNull: true
        },
        studentFmmarry: {
            type: DataTypes.STRING(2),
            allowNull: true
        },
        studentFmmaryother: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        studentParname: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentParser: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentParcareer: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentParsalary: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        studentParphone: {
            type: DataTypes.STRING(13),
            allowNull: true
        },
        studentDrugscheck: {
            type: DataTypes.STRING(1),
            allowNull: true
        },
        studentSuperiority: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        studentEndyear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        studentEndstatus: {
            type: DataTypes.STRING(2),
            allowNull: false
        },
        studentPicture: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        studentPaymethod: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        studentBank: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        studentBankno: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        studentPaydate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        classID: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
    },
    {
        tableName: 'student',
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
        sequelize
    },
);

export { Student }