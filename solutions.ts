const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};



type InputType = string | number | boolean;
type OutputType = string | number;

const processInput = (input: InputType): OutputType => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};




type Coordinate = readonly [number, number, string];

const formatCoordinate = (input: Coordinate): string => {
  const [latitude, longitude, locationName] = input;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.students >= minStudents && course.isPublished,
  );
};



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);

    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



const validateAgeAsync = async (age: number): Promise<string> => {

  return new Promise((resolve, reject) => {
    if(age >= 18) {
      setTimeout(() => {
        resolve("Access Granted")
      }, 1000)
    } else {
      reject(new Error("Access Denied: Must be 18 or older"))
    }
  })

}


