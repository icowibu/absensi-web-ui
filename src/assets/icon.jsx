import React from 'react';
import Icon from "@ant-design/icons"

const People = () => {
    return (
        <span class="material-symbols-outlined">
            person_add
        </span>
    );
}

const PeopleIcon = (props) => <Icon component={People} {...props} />;

export {PeopleIcon}