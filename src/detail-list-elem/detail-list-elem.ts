import {
    LitElement, html, customElement, property
} from 'lit-element';

interface CustomTitle {
    text:string;
    style?:string;
    url?:string;
    target?:string;
}
interface CustomImg {
    src:string;
    alt?:string;
    style?:string;
}
interface CustomDescription {
    text:string;
    style?:string;
}
interface CustomTag {
    text:string;
    type?:string;
    style?:string;
}
interface Item {
    id:number
    title: CustomTitle;
    description?: CustomDescription;
    img?: CustomImg;
    tags?: Array<CustomTag>;
    onClick?: (i: Item, e: Event)=>void
}

@customElement('detail-list-elem')
export class DetailListElem extends LitElement {
    @property({type: Array}) items:Array<Item> = [];
    getValue(arr: any){
        return arr.text || arr.src || arr;
    }
    getTags(tags:any){
         enum LabelTypes {
            warn ='label-warning',
            danger ='label-danger',
            info = 'label-info',
            success = 'label-success'
        }
        return tags && tags.map((tag:any)=>html`
        <span class="label ${LabelTypes[tag.type || 'success']}" .style=${tag.style}>${tag.text || tag}</span>
        `);

    }
    render() {
        console.log(this.items);
        return html`
        <style>
            *{
                font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
            }
            .products-list>.item:before, .products-list>.item:after {
                content: " ";
                display: table;
            }
            .pull-right {
                float: right!important;
            }
            .label {
                display: inline;
                padding: .2em .6em .3em;
                font-size: 75%;
                font-weight: 700;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                border-radius: .25em;
                margin-right: .3em;
            }
            .label-warning {
                background-color: #f0ad4e;
            }
            .label-info {
                background-color: #5bc0de;
            }
            .label-danger {
                background-color: #d9534f;
            }
            .label-success {
                background-color: #5cb85c;
            }
            ul{
                display: block;
            }
            .products-list {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .product-list-in-box>.item {
                -webkit-box-shadow: none;
                box-shadow: none;
                border-radius: 0;
                border-bottom: 1px solid #f4f4f4;
            }
            .products-list .product-img {
                float: left;
            }
            .products-list .product-img img {
                width: 50px;
                height: 50px;
            }
            img {
                vertical-align: middle;
            }
            .products-list .product-info {
                margin-left: 60px;
            }
            .products-list .product-title {
                font-weight: 600;
            }
            .products-list .product-description {
                display: block;
                color: #999;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .products-list>.item {
                border-radius: 3px;
                -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                padding: 10px 0;
                background: #fff;
            }
        
        </style>
        <ul class="products-list product-list-in-box">
        
            ${this.items.map((item, i)=>{
                const descriptionStyle = item.description ? item.description.style : null;
                console.log(descriptionStyle);
                return html`
            <li class="item">
                ${item.img && html`
                    <div class="product-img" .style=${item.img.style}>
                        <img src="${this.getValue(item.img)}" alt="Product Image"/>
                    </div>
                
                `}
                <div class="product-info">
                    ${item.title.url? html`
                    <a href="${item.title.url}" target="${item.title.target}" class="product-title" .style=${item.title.style}>${item.title.text}
                        <div class="pull-right">${this.getTags(item.tags)}</div>
                    </a>
                    
            
                    `:
                    html`
                    <span class="product-title" .style=${item.title.style}>${item.title.text}
                        <div class="pull-right">${this.getTags(item.tags)}</div>
                    </span>
                    
                    `
            
            
            
            }
                    <span class="product-description" .style=${descriptionStyle}>
                        ${item.description && item.description.text}
                    </span>
                </div>
            </li>`}
        
        )}
        </ul>
        `;
    }
}
