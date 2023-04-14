import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
import PropTypes from 'prop-types';

import { generateMonths, generateYears } from '../../utils/currentDateArr';

const FilterDate = ({ date, setDate }) => {
    const years = generateYears();
    const months = generateMonths(date);

    const handleClickYear = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
        setDate((prev) => ({
            ...prev,
            year: Number.parseInt(e.key),
        }));
    };
    const handleClickMonth = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
        setDate((prev) => ({
            ...prev,
            month: Number.parseInt(e.key),
        }));
    };
    const yearProps = {
        items: years,
        onClick: handleClickYear,
    };

    const monthProps = {
        items: months,
        onClick: handleClickMonth,
    };

    const DROPDOWN_LIST = [
        {
            title: 'Year',
            props: yearProps,
        },
        {
            title: 'Month',
            props: monthProps,
        },
    ];

    return (
        <Space wrap>
            {DROPDOWN_LIST.map((item) => {
                return (
                    <Dropdown menu={item.props} key={item.title}>
                        <Button>
                            <Space>
                                {item.tilte}
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                );
            })}
        </Space>
    );
};

FilterDate.propTypes = {
    date: PropTypes.string,
    setDate: PropTypes.func,
};

export default FilterDate;
