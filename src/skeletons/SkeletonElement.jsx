import './Skeleton.css'

const SkeletonElement = ({ type }) => {
    let classes = `skeleton ${type}`

    return (
        <div className={classes}></div>
    )
}

export default SkeletonElement;