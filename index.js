/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

function arrToObj(data) {
    if(!data || data.length = 0) {
        return 
    }
    return Object.assign({}, ...data.map(([key, val]) => ({ [key]: val })));
}

exports.stripPrivateProperties = (filters, users) => users.map(user => {
    const userFilter = Object.entries(user).filter([itemKey] => !filters.includes(itemKey))
    return arrToObj(userFilter)
};

exports.excludeByProperty = (filter, users) => users.filter(user => !item.hasOwnProperty(filter));

exports.sumDeep = (arr) => arr.map(({ objects }) => {
    return objects.map(obj => obj.val).reduce((pre, next) => pre + next, 0)
});

exports.applyStatusColor = (colorStatus, status) => {
    const statusObj = {}
    const colorStatusObj = Object.entries(colorStatus)
                            .reduce((arr, [clr, sts]) => [...arr, ...sts.map(item => [sts, clr])], [])
                            .map(([sts, clr]) => statusObj[sts] = clr))

    return status.map(({ status }) => {
        return statusObj.hasOwnProperty(status) && {status, color: statusObj[status]}
    }).filter(Boolean)
};

exports.createGreeting = (fn, greetWord) => name => fn(greetWord, name);

exports.setDefaults = (defaults) => {
    const defaultKeys = Object.keys(defaults)
    return (item) => {
        const newProps = defaultKeys.map(defaultKey => {
            return !item.hasOwnProperty(defaultKey) && [defaultKey, defaults[defaultKey]]
        }).filter(Boolean)
        const newDefaultProps = arrToObj(newProps)

        return {...newDefaultProps, ...user}
    } 
};

exports.fetchUserByNameAndUsersCompany = async (name, services) => {
    const [status, users] = await Promise.all([
        services.fetchStatus,
        services.fetchUsers
    ])

    const userIndex = users.map(item => item.name).indexOf(name)
    const user = users[userIndex]

    const company = await services.fetchCompanyById(user?.companyId?) || {}

    return {
        company,
        status,
        user
    }

};
