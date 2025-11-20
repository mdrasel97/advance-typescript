//enum
// set of fixed string leteral ek ja


// type UserRoles = 'Admin' | 'Editor' | 'Viewer'

const UserRoles ={
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer : 'Viewer'
}as const;

// UserRoles.Admin = 'Mon Chasse'

const canEdit = (role : keyof typeof UserRoles)=>{
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true
    }else return false
}

const isEdit = canEdit(UserRoles.Admin)
console.log(isEdit)