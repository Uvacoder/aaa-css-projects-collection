const work = document.querySelector('.navbar-item-work'); //selecting work navbar item.
const work_items = document.querySelector('.work-items');
const work_item_container = document.querySelector('.work-item-container');
const icon_container = document.querySelector('.icon-container');

const work_items_container_collapse = document.querySelector('.work-items-container-collapse');
const icon_container_collapse = document.querySelector('.icon-container-collapse');
const collapse_btn = document.querySelector('.collapse-btn');
const navbar_collapse = document.querySelector('.navbar-collapse');

icon_container.onclick = () => {
    work_item_container.classList.remove('visibility');
    // icon_container.style.color = 'grey';
}
// collapsed work navbar item
icon_container_collapse.onclick = () => {
    if(work_items_container_collapse.classList.contains('visibility')){
        work_items_container_collapse.classList.remove('visibility');
    }
    else{
        work_items_container_collapse.classList.add('visibility');
    } 
}
//collapse button
collapse_btn.onclick = () => {
    if(navbar_collapse.classList.contains('visibility')){
        navbar_collapse.classList.remove('visibility');
    }
    else{
        navbar_collapse.classList.add('visibility');
    }   
}
document.addEventListener('mouseup', function(e) {
    if (!icon_container.contains(e.target)) {
      work_item_container.classList.add('visibility');
    //   icon_container.style.color = 'white';
    }
  });

  work.onmouseover = () => {
    work.style.color = '#0044FA';
  }
  work.onmouseout = () => {
    work.style.color = 'white';
  }

