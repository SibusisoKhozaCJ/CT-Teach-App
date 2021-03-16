import React from "react"

const UserRecord = ({ progress}) => {
    return (
        <div class="table_row">
          
            <div class="table_small">
                <div class="table_cell tranee-firstName">{progress.userInfo.firstname}</div>
            </div>
            <div class="table_small">
                <div class="table_cell tranee-lastName">{progress.userInfo.lastname ? progress.userInfo.lastname : progress.userInfo.firstname}</div>
            </div>
        </div>

    )

}

export default UserRecord;