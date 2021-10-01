import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
    <ul className='ListWrapper__wrapper'>
        {props.items.map(item => (
            <ListItem key={item.name} {...item}
            />
        ))}
    </ul>
)

// const ListWrapper = () => (
//     <ul className='ListWrapper__wrapper'>
//         {twitterAccounts.map(item => (
//             <ListItem
//             name = {item.name}
//             image = {item.image}
//             description =  {item.description}
//             twitterLink = {item.twitterLink}
//             />
//         ))}
//     </ul>
// )

export default ListWrapper;