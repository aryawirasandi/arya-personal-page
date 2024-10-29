import type { ActionData } from "./$types";

export class Contact {
    private _showAnimate = $state(false);

    private _showAlert = $state(false);

    private _infos = $state<{ href: string, name: string}[]>([
        {
            href: "mailto:aryawirasandi7153@gmail.com",
            name: "aryawirasandi7153@gmail.com"
        },
        {
            href: "tel:+6282218341631",
            name: "Call (+6282281341631)"
        },
        {
            href: "https://wa.me/+6282218341631?text=Hello%20Arya",
            name: "WhatsApp (+6282281341631)"
        }
    ])

    public get infos(){
        return this._infos;
    }

    public get showAlert() {
        return this._showAlert;
    }
    public set showAlert(value) {
        this._showAlert = value;
    }

    public get showAnimate() {
        return this._showAnimate;
    }
    public set showAnimate(value) {
        this._showAnimate = value;
    }

    timerPopupClass = $derived((form: ActionData) => {
		if(form && form.success){
			return 'bg-green-600'
		}
		return 'bg-red-600'
	});

    isThereElement(form: ActionData){
        return typeof form?.success !== 'undefined'
    }
}
