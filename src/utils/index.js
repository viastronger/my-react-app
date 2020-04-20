export default {
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            currentPage: data.currentPage,
            pageSize: data.pageSize,
            total: data.total,
            showTotal: () => `共${data.total}条`,
            showQuickJumper: true,
        }
    },
}