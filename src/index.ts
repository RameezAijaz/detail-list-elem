import "./about-elem/detail-list-elem";
import {customElement, LitElement, property, html} from "lit-element";

@customElement('demo-elem')
export class DetailListElem extends LitElement {

    render() {
        const data = [
            {
                "title": {"text":"F-16 Fighting Falcon", "url":"https://stackoverflow.com/questions/20724265/onclick-event-on-list-item", "target":"_blank"},
                "description": {"text":"The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics for the United States Air Force."},
                "img": {"src": "falcon.jpg"},
                "tags": [{"text" : "multi-role"}],
                "onClick": function(item:any, event:any){alert(item.id)}
            },
            {
                "title": {"text": "Lockheed Martin F-22 Raptor"},
                "description": {"text": "The Lockheed Martin F-22 Raptor is a fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter aircraft developed for the United States Air Force."},
                "img": {"src":"lockhead.jpg"},
                "tags": [{"text" : "stealth", "type": "warn"}]
            },
            {
                "title": {"text": "Fairchild Republic A-10 Thunderbolt II"},
                "description": {"text": "The Fairchild Republic A-10 Thunderbolt II is a single-seat, twin turbofan engine, straight wing jet aircraft developed by Fairchild-Republic for the United States Air Force."},
                "img": {"src": "fairchild.jpg"},
                "tags": [{"text" : "attack", "type": "danger"}]
            },
            {
                "title": {"text": "Northrop Grumman B-2 Spirit"},
                "description": {"text": "The Northrop B-2 Spirit, also known as the Stealth Bomber, is an American heavy strategic bomber, featuring low observable stealth technology designed for penetrating dense anti-aircraft defenses; it is a flying wing design with a crew of two."},
                "img": {"src": "spirit.jpeg"},
                "tags": [{"text" : "stealth", "type": "warn"}, {"text" : "bomber", "type": "danger"}]
            },
            {
                "title": {"text": "McDonnell Douglas F-15 Eagle"},
                "description": {"text": "The McDonnell Douglas F-15 Eagle is an American twin-engine, all-weather tactical fighter aircraft designed by McDonnell Douglas. Following reviews of proposals, the United States Air Force selected McDonnell Douglas design in 1967 to meet the service need for a dedicated air superiority fighter."},
                "img": {"src": "eagle.jpg"},
                "tags": [{"text" : "fighter", "type": "success"}]
            }

        ];
        return html`
        <detail-list-elem items='${JSON.stringify(data)}'/>
        `;
    }
}
