
import {User} from './ContextApi';


function sortUsersByTitleAndItemName(users: User[]): User[] {
    return [...users].sort((a, b) => {
        a.item.sort((val1,val2)=> {
            return val1.itemname.localeCompare(val2.itemname)
        })
        b.item.sort((val1,val2)=> {
            return val1.itemname.localeCompare(val2.itemname)
        })
      return a.title.localeCompare(b.title);
      
    });
  }
  
export const handleClick = (Category:string, value:string, user:User[])=>{
    if(user[0].id===0){
        return [{
            title:Category,
            id:1,
            item:[{itemname:value,count:1}]
        }]
    }
    else
    {
        const searchtitle = user.find(item=>item.title===Category);
        if(searchtitle){
            const searchitem=searchtitle.item.find(item=>item.itemname===value);
            if(searchitem){
                searchitem.count++;
                
            }
            else{
                const newitem= {itemname:value, count:1};
                searchtitle.item.push(newitem);
                
            }
        }
        else{
            const maxId = Math.max(...user.map((item) => item.id));
            user.push({
                title:Category,
                id:maxId+1,
                item:[{itemname:value,count:1}]
            });
        }
        return sortUsersByTitleAndItemName(user);
        
    }
  }