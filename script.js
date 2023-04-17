function dynamic() {
  const colors = {
    red: 'hover:text-red-600 text-center',
    green: 'hover:text-green-600 text-center',
  };

  document.getElementById('change').innerHTML = 'hello';

  return <div className={`${colors.red}`}>2</div>;
}

dynamic();
