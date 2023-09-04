export class User {
  constructor(
    public id?: any,
    public username?: any,
    public email?: any,
    public first_name?: any,
    public last_name?: any,
    public businesshub?: any,
    public con_address?: any,
    public contractor_name?: any,
    public coren_or_nemsa_competency?: any,
    public coren?: any,
    public date_joined?: any,
    public groups?: any,
    public is_active?: any,
    public is_admin?: any,
    public is_contractor?: any,
    public is_cto?: any,
    public is_hsch?: any,
    public is_md?: any,
    public is_npd?: any,
    public is_staff?: any,
    public is_superuser?: any,
    public is_te?: any,
    public is_tm?: any,
    public is_hm?: any,
    public last_login?: any,
    public licensed_no?: any,
    public reg_date?: any,
    public tel_no?: any,
    public user_permissions?: any,
    public job_title?: any,

  ) {}

  static create(data: any): User {
    return new User(
      data.id,
      data.username,
      data.email,
      data.first_name,
      data.last_name,
      data.businesshub,
      data.con_address,
      data.contractor_name,
      data.coren_or_nemsa_competency,
      data.coren,
      data.date_joined,
      data.groups,
      data.is_active,
      data.is_admin,
      data.is_contractor,
      data.is_cto,
      data.is_hsch,
      data.is_md,
      data.is_npd,
      data.is_staff,
      data.is_superuser,
      data.is_te,
      data.is_tm,
      data.is_hm,
      data.last_login,
      data.licensed_no,
      data.reg_date,
      data.tel_no,
      data.user_permissions,  
      data.job_title,  
        );
  }

  static getUser(): any {
    const userData = localStorage.getItem('master.user');
    if (userData) {
      return User.create(JSON.parse(userData));
    }
    return null;
  }


  static isUser(): boolean {
    const user = User.getUser();
    if (user === null) {
      return false;
    }
    return true;
  }

  static isContractor(): boolean {
    const user = User.getUser();
    if (user === null) {
      return false;
    }
    return user.is_contractor;
  }

  static isAdmin(): boolean {
    const user = User.getUser();
    if (user === null) {
      return false;
    }
    return user.is_admin ;
  }

}
