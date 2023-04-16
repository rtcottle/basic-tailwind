function dynamic() {
    const colors = {
        red: 'hover:text-red-600 text-center',
        green: 'hover:text-green-600 text-center'
    }

    return {
        <div className={`${colors}`}>
        </div>
    }
}