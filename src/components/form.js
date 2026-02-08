import React, { Component } from 'react'


class ContactForm extends Component {
    
    componentDidMount() {
        // Formspree setup - free email service
    }


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        events: '',
        notes: '',
        error: {},
        showNotification: false,
        notificationMessage: '',
        notificationType: 'success'
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            notes } = this.state;

        let error = {};

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }

        // If there are no errors, send the email
        if (Object.keys(error).length === 0) {
            // Send email using Formspree (free service)
            fetch('https://formspree.io/f/meeljakj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name + ' ' + lastname,
                    email: email,
                    subject: subject,
                    message: notes
                })
            })
                .then((response) => {
                    if (response.ok) {
                        console.log('Email sent successfully!');
                        this.setState({
                            name: '',
                            lastname: '',
                            email: '',
                            subject: '',
                            events: '',
                            notes: '',
                            error: {},
                            showNotification: true,
                            notificationMessage: 'Message sent successfully! We will get back to you soon.',
                            notificationType: 'success'
                        });
                        setTimeout(() => {
                            this.setState({ showNotification: false });
                        }, 3000);
                    } else {
                        this.setState({
                            showNotification: true,
                            notificationMessage: 'Failed to send message. Please try again.',
                            notificationType: 'error'
                        });
                        setTimeout(() => {
                            this.setState({ showNotification: false });
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.log('Failed to send email:', error);
                    this.setState({
                        showNotification: true,
                        notificationMessage: 'Failed to send message. Please try again.',
                        notificationType: 'error'
                    });
                    setTimeout(() => {
                        this.setState({ showNotification: false });
                    }, 3000);
                });
        } else {
            // If there are errors, display them
            this.setState({ error });
        }
    }

    render(){
        const { name,
            email,
            subject,
            lastname,
            error,
            showNotification,
            notificationMessage,
            notificationType } = this.state;

        return(
            <>
                {showNotification && (
                    <div style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        padding: '16px 24px',
                        backgroundColor: notificationType === 'success' ? '#4caf50' : '#f44336',
                        color: 'white',
                        borderRadius: '4px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        zIndex: 9999,
                        fontSize: '14px',
                        fontWeight: '500',
                        animation: 'slideIn 0.3s ease-in-out'
                    }}>
                        {notificationMessage}
                    </div>
                )}
                <style>{`
                    @keyframes slideIn {
                        from {
                            transform: translateX(400px);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                `}</style>
            <form onSubmit={this.submitHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Subject"/>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="notes" onChange={this.changeHandler} value={this.state.notes} placeholder="Message"></textarea>
                            <p>{this.state.error.notes ? this.state.error.notes : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="template-btn-s3">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
            </>
        )
    }

}
export default  ContactForm;