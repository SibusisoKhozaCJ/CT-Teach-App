import React from "react"

const UserRecord = ({ progress}) => {
    return (
        <div class="table_row">
            <div class="table_small">
                <div class="table_cell">
                    <div class="new-checkbox">
                        <div class="form-group">
                            <input type="checkbox" id="check1" />
                            <label for="check1"></label>
                        </div>
                    </div>
                </div>
            </div>
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