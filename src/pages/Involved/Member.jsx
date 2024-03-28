import './Member.css'
import React, { useState } from 'react';
import MemberForm from '../../components/MemberForm/MemberForm';

function Member() {
    return (
        <div className="member-page">
            <MemberForm />
        </div>
    );
}

export default Member;