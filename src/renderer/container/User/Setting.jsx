import React from 'react';
import './index.scss';

const Setting = (props) => {
    function openSettings() {
        props.handleSetting();
    }

    return (
        <div className="setting-wrap">
            <div className="setting-item">备份与恢复</div>
            <div className="setting-item" onClick={openSettings}>设置</div>
        </div>
    );
};

export default Setting;
